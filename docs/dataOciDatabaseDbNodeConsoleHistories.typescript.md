# `dataOciDatabaseDbNodeConsoleHistories` Submodule <a name="`dataOciDatabaseDbNodeConsoleHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbNodeConsoleHistories <a name="DataOciDatabaseDbNodeConsoleHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories oci_database_db_node_console_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories(scope: Construct, id: string, config: DataOciDatabaseDbNodeConsoleHistoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig">DataOciDatabaseDbNodeConsoleHistoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig">DataOciDatabaseDbNodeConsoleHistoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseDbNodeConsoleHistoriesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDbNodeConsoleHistories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDbNodeConsoleHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbNodeConsoleHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.consoleHistoryCollection">consoleHistoryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList">DataOciDatabaseDbNodeConsoleHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeIdInput">dbNodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeId">dbNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `consoleHistoryCollection`<sup>Required</sup> <a name="consoleHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.consoleHistoryCollection"></a>

```typescript
public readonly consoleHistoryCollection: DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseDbNodeConsoleHistoriesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList">DataOciDatabaseDbNodeConsoleHistoriesFilterList</a>

---

##### `dbNodeIdInput`<sup>Optional</sup> <a name="dbNodeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeIdInput"></a>

```typescript
public readonly dbNodeIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseDbNodeConsoleHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `dbNodeId`<sup>Required</sup> <a name="dbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeId"></a>

```typescript
public readonly dbNodeId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbNodeConsoleHistoriesConfig <a name="DataOciDatabaseDbNodeConsoleHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbNodeConsoleHistoriesConfig: dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dbNodeId">dbNodeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#db_node_id DataOciDatabaseDbNodeConsoleHistories#db_node_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#display_name DataOciDatabaseDbNodeConsoleHistories#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#id DataOciDatabaseDbNodeConsoleHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#state DataOciDatabaseDbNodeConsoleHistories#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbNodeId`<sup>Required</sup> <a name="dbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dbNodeId"></a>

```typescript
public readonly dbNodeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#db_node_id DataOciDatabaseDbNodeConsoleHistories#db_node_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#display_name DataOciDatabaseDbNodeConsoleHistories#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseDbNodeConsoleHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#filter DataOciDatabaseDbNodeConsoleHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#id DataOciDatabaseDbNodeConsoleHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#state DataOciDatabaseDbNodeConsoleHistories#state}.

---

### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection: dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection = { ... }
```


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems: dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems = { ... }
```


### DataOciDatabaseDbNodeConsoleHistoriesFilter <a name="DataOciDatabaseDbNodeConsoleHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbNodeConsoleHistoriesFilter: dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#name DataOciDatabaseDbNodeConsoleHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#values DataOciDatabaseDbNodeConsoleHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#regex DataOciDatabaseDbNodeConsoleHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#name DataOciDatabaseDbNodeConsoleHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#values DataOciDatabaseDbNodeConsoleHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#regex DataOciDatabaseDbNodeConsoleHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.dbNodeId">dbNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbNodeId`<sup>Required</sup> <a name="dbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.dbNodeId"></a>

```typescript
public readonly dbNodeId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems</a>

---


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection</a>

---


### DataOciDatabaseDbNodeConsoleHistoriesFilterList <a name="DataOciDatabaseDbNodeConsoleHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDbNodeConsoleHistoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>[]

---


### DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference <a name="DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbNodeConsoleHistories } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDbNodeConsoleHistoriesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter">DataOciDatabaseDbNodeConsoleHistoriesFilter</a>

---



