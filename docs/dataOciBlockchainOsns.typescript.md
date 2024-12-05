# `dataOciBlockchainOsns` Submodule <a name="`dataOciBlockchainOsns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainOsns <a name="DataOciBlockchainOsns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns oci_blockchain_osns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainOsns.DataOciBlockchainOsns(scope: Construct, id: string, config: DataOciBlockchainOsnsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig">DataOciBlockchainOsnsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig">DataOciBlockchainOsnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciBlockchainOsnsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter">DataOciBlockchainOsnsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBlockchainOsns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.isConstruct"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainOsns.DataOciBlockchainOsns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.isTerraformElement"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainOsns.DataOciBlockchainOsns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.isTerraformDataSource"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainOsns.DataOciBlockchainOsns.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.generateConfigForImport"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainOsns.DataOciBlockchainOsns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBlockchainOsns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBlockchainOsns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBlockchainOsns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainOsns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList">DataOciBlockchainOsnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.osnCollection">osnCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList">DataOciBlockchainOsnsOsnCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.blockchainPlatformIdInput">blockchainPlatformIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter">DataOciBlockchainOsnsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.blockchainPlatformId">blockchainPlatformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.filter"></a>

```typescript
public readonly filter: DataOciBlockchainOsnsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList">DataOciBlockchainOsnsFilterList</a>

---

##### `osnCollection`<sup>Required</sup> <a name="osnCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.osnCollection"></a>

```typescript
public readonly osnCollection: DataOciBlockchainOsnsOsnCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList">DataOciBlockchainOsnsOsnCollectionList</a>

---

##### `blockchainPlatformIdInput`<sup>Optional</sup> <a name="blockchainPlatformIdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.blockchainPlatformIdInput"></a>

```typescript
public readonly blockchainPlatformIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciBlockchainOsnsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter">DataOciBlockchainOsnsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `blockchainPlatformId`<sup>Required</sup> <a name="blockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.blockchainPlatformId"></a>

```typescript
public readonly blockchainPlatformId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainOsnsConfig <a name="DataOciBlockchainOsnsConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainOsnsConfig: dataOciBlockchainOsns.DataOciBlockchainOsnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.blockchainPlatformId">blockchainPlatformId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#blockchain_platform_id DataOciBlockchainOsns#blockchain_platform_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#display_name DataOciBlockchainOsns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter">DataOciBlockchainOsnsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#id DataOciBlockchainOsns#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blockchainPlatformId`<sup>Required</sup> <a name="blockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.blockchainPlatformId"></a>

```typescript
public readonly blockchainPlatformId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#blockchain_platform_id DataOciBlockchainOsns#blockchain_platform_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#display_name DataOciBlockchainOsns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciBlockchainOsnsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter">DataOciBlockchainOsnsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#filter DataOciBlockchainOsns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#id DataOciBlockchainOsns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBlockchainOsnsFilter <a name="DataOciBlockchainOsnsFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainOsnsFilter: dataOciBlockchainOsns.DataOciBlockchainOsnsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#name DataOciBlockchainOsns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#values DataOciBlockchainOsns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#regex DataOciBlockchainOsns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#name DataOciBlockchainOsns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#values DataOciBlockchainOsns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_osns#regex DataOciBlockchainOsns#regex}.

---

### DataOciBlockchainOsnsOsnCollection <a name="DataOciBlockchainOsnsOsnCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollection.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainOsnsOsnCollection: dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollection = { ... }
```


### DataOciBlockchainOsnsOsnCollectionItems <a name="DataOciBlockchainOsnsOsnCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItems.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainOsnsOsnCollectionItems: dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItems = { ... }
```


### DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam <a name="DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam: dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainOsnsFilterList <a name="DataOciBlockchainOsnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.get"></a>

```typescript
public get(index: number): DataOciBlockchainOsnsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter">DataOciBlockchainOsnsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBlockchainOsnsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter">DataOciBlockchainOsnsFilter</a>[]

---


### DataOciBlockchainOsnsFilterOutputReference <a name="DataOciBlockchainOsnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter">DataOciBlockchainOsnsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBlockchainOsnsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsFilter">DataOciBlockchainOsnsFilter</a>

---


### DataOciBlockchainOsnsOsnCollectionItemsList <a name="DataOciBlockchainOsnsOsnCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciBlockchainOsnsOsnCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList <a name="DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.get"></a>

```typescript
public get(index: number): DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference <a name="DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpuAllocationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam">DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ocpuAllocationNumber`<sup>Required</sup> <a name="ocpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```typescript
public readonly ocpuAllocationNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam">DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParam</a>

---


### DataOciBlockchainOsnsOsnCollectionItemsOutputReference <a name="DataOciBlockchainOsnsOsnCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.ad">ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.blockchainPlatformId">blockchainPlatformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.ocpuAllocationParam">ocpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList">DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.osnKey">osnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItems">DataOciBlockchainOsnsOsnCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.ad"></a>

```typescript
public readonly ad: string;
```

- *Type:* string

---

##### `blockchainPlatformId`<sup>Required</sup> <a name="blockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.blockchainPlatformId"></a>

```typescript
public readonly blockchainPlatformId: string;
```

- *Type:* string

---

##### `ocpuAllocationParam`<sup>Required</sup> <a name="ocpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.ocpuAllocationParam"></a>

```typescript
public readonly ocpuAllocationParam: DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList">DataOciBlockchainOsnsOsnCollectionItemsOcpuAllocationParamList</a>

---

##### `osnKey`<sup>Required</sup> <a name="osnKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.osnKey"></a>

```typescript
public readonly osnKey: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainOsnsOsnCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItems">DataOciBlockchainOsnsOsnCollectionItems</a>

---


### DataOciBlockchainOsnsOsnCollectionList <a name="DataOciBlockchainOsnsOsnCollectionList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.get"></a>

```typescript
public get(index: number): DataOciBlockchainOsnsOsnCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainOsnsOsnCollectionOutputReference <a name="DataOciBlockchainOsnsOsnCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainOsns } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList">DataOciBlockchainOsnsOsnCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollection">DataOciBlockchainOsnsOsnCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciBlockchainOsnsOsnCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionItemsList">DataOciBlockchainOsnsOsnCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainOsnsOsnCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainOsns.DataOciBlockchainOsnsOsnCollection">DataOciBlockchainOsnsOsnCollection</a>

---



