# `dataOciDatabaseExternalDatabaseConnectors` Submodule <a name="`dataOciDatabaseExternalDatabaseConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalDatabaseConnectors <a name="DataOciDatabaseExternalDatabaseConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors oci_database_external_database_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors(scope: Construct, id: string, config: DataOciDatabaseExternalDatabaseConnectorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig">DataOciDatabaseExternalDatabaseConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig">DataOciDatabaseExternalDatabaseConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseExternalDatabaseConnectorsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalDatabaseConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseExternalDatabaseConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExternalDatabaseConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExternalDatabaseConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalDatabaseConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseConnectors">externalDatabaseConnectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList">DataOciDatabaseExternalDatabaseConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseIdInput">externalDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseId">externalDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `externalDatabaseConnectors`<sup>Required</sup> <a name="externalDatabaseConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseConnectors"></a>

```typescript
public readonly externalDatabaseConnectors: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseExternalDatabaseConnectorsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList">DataOciDatabaseExternalDatabaseConnectorsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalDatabaseIdInput`<sup>Optional</sup> <a name="externalDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseIdInput"></a>

```typescript
public readonly externalDatabaseIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseExternalDatabaseConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalDatabaseId`<sup>Required</sup> <a name="externalDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.externalDatabaseId"></a>

```typescript
public readonly externalDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalDatabaseConnectorsConfig <a name="DataOciDatabaseExternalDatabaseConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalDatabaseConnectorsConfig: dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#compartment_id DataOciDatabaseExternalDatabaseConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.externalDatabaseId">externalDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#external_database_id DataOciDatabaseExternalDatabaseConnectors#external_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#display_name DataOciDatabaseExternalDatabaseConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#id DataOciDatabaseExternalDatabaseConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#state DataOciDatabaseExternalDatabaseConnectors#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#compartment_id DataOciDatabaseExternalDatabaseConnectors#compartment_id}.

---

##### `externalDatabaseId`<sup>Required</sup> <a name="externalDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.externalDatabaseId"></a>

```typescript
public readonly externalDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#external_database_id DataOciDatabaseExternalDatabaseConnectors#external_database_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#display_name DataOciDatabaseExternalDatabaseConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseExternalDatabaseConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#filter DataOciDatabaseExternalDatabaseConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#id DataOciDatabaseExternalDatabaseConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#state DataOciDatabaseExternalDatabaseConnectors#state}.

---

### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors: dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors = { ... }
```


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials: dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials = { ... }
```


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString: dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString = { ... }
```


### DataOciDatabaseExternalDatabaseConnectorsFilter <a name="DataOciDatabaseExternalDatabaseConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalDatabaseConnectorsFilter: dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#name DataOciDatabaseExternalDatabaseConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#values DataOciDatabaseExternalDatabaseConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#regex DataOciDatabaseExternalDatabaseConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#name DataOciDatabaseExternalDatabaseConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#values DataOciDatabaseExternalDatabaseConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_database_connectors#regex DataOciDatabaseExternalDatabaseConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.sslSecretId">sslSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `sslSecretId`<sup>Required</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.sslSecretId"></a>

```typescript
public readonly sslSecretId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentials</a>

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionString</a>

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionCredentials">connectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionStatus">connectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionString">connectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorAgentId">connectorAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.externalDatabaseId">externalDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeConnectionStatusLastUpdated">timeConnectionStatusLastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionCredentials`<sup>Required</sup> <a name="connectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionCredentials"></a>

```typescript
public readonly connectionCredentials: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionCredentialsList</a>

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionStatus"></a>

```typescript
public readonly connectionStatus: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsConnectionStringList</a>

---

##### `connectorAgentId`<sup>Required</sup> <a name="connectorAgentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorAgentId"></a>

```typescript
public readonly connectorAgentId: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalDatabaseId`<sup>Required</sup> <a name="externalDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.externalDatabaseId"></a>

```typescript
public readonly externalDatabaseId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeConnectionStatusLastUpdated`<sup>Required</sup> <a name="timeConnectionStatusLastUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeConnectionStatusLastUpdated"></a>

```typescript
public readonly timeConnectionStatusLastUpdated: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors">DataOciDatabaseExternalDatabaseConnectorsExternalDatabaseConnectors</a>

---


### DataOciDatabaseExternalDatabaseConnectorsFilterList <a name="DataOciDatabaseExternalDatabaseConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseExternalDatabaseConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>[]

---


### DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference <a name="DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalDatabaseConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseExternalDatabaseConnectorsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalDatabaseConnectors.DataOciDatabaseExternalDatabaseConnectorsFilter">DataOciDatabaseExternalDatabaseConnectorsFilter</a>

---



