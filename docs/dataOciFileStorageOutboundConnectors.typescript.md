# `dataOciFileStorageOutboundConnectors` Submodule <a name="`dataOciFileStorageOutboundConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageOutboundConnectors <a name="DataOciFileStorageOutboundConnectors" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors oci_file_storage_outbound_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors(scope: Construct, id: string, config: DataOciFileStorageOutboundConnectorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig">DataOciFileStorageOutboundConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig">DataOciFileStorageOutboundConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFileStorageOutboundConnectorsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFileStorageOutboundConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFileStorageOutboundConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFileStorageOutboundConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFileStorageOutboundConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageOutboundConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList">DataOciFileStorageOutboundConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.outboundConnectors">outboundConnectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filter"></a>

```typescript
public readonly filter: DataOciFileStorageOutboundConnectorsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList">DataOciFileStorageOutboundConnectorsFilterList</a>

---

##### `outboundConnectors`<sup>Required</sup> <a name="outboundConnectors" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.outboundConnectors"></a>

```typescript
public readonly outboundConnectors: DataOciFileStorageOutboundConnectorsOutboundConnectorsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFileStorageOutboundConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageOutboundConnectorsConfig <a name="DataOciFileStorageOutboundConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageOutboundConnectorsConfig: dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#availability_domain DataOciFileStorageOutboundConnectors#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#compartment_id DataOciFileStorageOutboundConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#display_name DataOciFileStorageOutboundConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#id DataOciFileStorageOutboundConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#state DataOciFileStorageOutboundConnectors#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#availability_domain DataOciFileStorageOutboundConnectors#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#compartment_id DataOciFileStorageOutboundConnectors#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#display_name DataOciFileStorageOutboundConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFileStorageOutboundConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#filter DataOciFileStorageOutboundConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#id DataOciFileStorageOutboundConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#state DataOciFileStorageOutboundConnectors#state}.

---

### DataOciFileStorageOutboundConnectorsFilter <a name="DataOciFileStorageOutboundConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageOutboundConnectorsFilter: dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#name DataOciFileStorageOutboundConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#values DataOciFileStorageOutboundConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#regex DataOciFileStorageOutboundConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#name DataOciFileStorageOutboundConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#values DataOciFileStorageOutboundConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#regex DataOciFileStorageOutboundConnectors#regex}.

---

### DataOciFileStorageOutboundConnectorsOutboundConnectors <a name="DataOciFileStorageOutboundConnectorsOutboundConnectors" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageOutboundConnectorsOutboundConnectors: dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors = { ... }
```


### DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints: dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints = { ... }
```


### DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciFileStorageOutboundConnectorsOutboundConnectorsLocks: dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageOutboundConnectorsFilterList <a name="DataOciFileStorageOutboundConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.get"></a>

```typescript
public get(index: number): DataOciFileStorageOutboundConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFileStorageOutboundConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>[]

---


### DataOciFileStorageOutboundConnectorsFilterOutputReference <a name="DataOciFileStorageOutboundConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFileStorageOutboundConnectorsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.get"></a>

```typescript
public get(index: number): DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints</a>

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsList <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.get"></a>

```typescript
public get(index: number): DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.get"></a>

```typescript
public get(index: number): DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks</a>

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer"></a>

```typescript
import { dataOciFileStorageOutboundConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.bindDistinguishedName">bindDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors">DataOciFileStorageOutboundConnectorsOutboundConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `bindDistinguishedName`<sup>Required</sup> <a name="bindDistinguishedName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.bindDistinguishedName"></a>

```typescript
public readonly bindDistinguishedName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList</a>

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `passwordSecretVersion`<sup>Required</sup> <a name="passwordSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretVersion"></a>

```typescript
public readonly passwordSecretVersion: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFileStorageOutboundConnectorsOutboundConnectors;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors">DataOciFileStorageOutboundConnectorsOutboundConnectors</a>

---



