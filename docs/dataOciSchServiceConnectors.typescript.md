# `dataOciSchServiceConnectors` Submodule <a name="`dataOciSchServiceConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSchServiceConnectors <a name="DataOciSchServiceConnectors" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors oci_sch_service_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectors(scope: Construct, id: string, config: DataOciSchServiceConnectorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig">DataOciSchServiceConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig">DataOciSchServiceConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciSchServiceConnectorsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSchServiceConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciSchServiceConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciSchServiceConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciSchServiceConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSchServiceConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList">DataOciSchServiceConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.serviceConnectorCollection">serviceConnectorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList">DataOciSchServiceConnectorsServiceConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filter"></a>

```typescript
public readonly filter: DataOciSchServiceConnectorsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList">DataOciSchServiceConnectorsFilterList</a>

---

##### `serviceConnectorCollection`<sup>Required</sup> <a name="serviceConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.serviceConnectorCollection"></a>

```typescript
public readonly serviceConnectorCollection: DataOciSchServiceConnectorsServiceConnectorCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList">DataOciSchServiceConnectorsServiceConnectorCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciSchServiceConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSchServiceConnectorsConfig <a name="DataOciSchServiceConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsConfig: dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#compartment_id DataOciSchServiceConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#display_name DataOciSchServiceConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#id DataOciSchServiceConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#state DataOciSchServiceConnectors#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#compartment_id DataOciSchServiceConnectors#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#display_name DataOciSchServiceConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciSchServiceConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#filter DataOciSchServiceConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#id DataOciSchServiceConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#state DataOciSchServiceConnectors#state}.

---

### DataOciSchServiceConnectorsFilter <a name="DataOciSchServiceConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsFilter: dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#name DataOciSchServiceConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#values DataOciSchServiceConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#regex DataOciSchServiceConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#name DataOciSchServiceConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#values DataOciSchServiceConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#regex DataOciSchServiceConnectors#regex}.

---

### DataOciSchServiceConnectorsServiceConnectorCollection <a name="DataOciSchServiceConnectorsServiceConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollection: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItems <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItems: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsSource: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue = { ... }
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks: dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSchServiceConnectorsFilterList <a name="DataOciSchServiceConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciSchServiceConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>[]

---


### DataOciSchServiceConnectorsFilterOutputReference <a name="DataOciSchServiceConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciSchServiceConnectorsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter">DataOciSchServiceConnectorsFilter</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems">DataOciSchServiceConnectorsServiceConnectorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.source"></a>

```typescript
public readonly source: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.target"></a>

```typescript
public readonly target: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.tasks"></a>

```typescript
public readonly tasks: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems">DataOciSchServiceConnectorsServiceConnectorCollectionItems</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```typescript
public readonly metrics: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```typescript
public readonly namespaces: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.namespaceDetails">namespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `namespaceDetails`<sup>Required</sup> <a name="namespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```typescript
public readonly namespaceDetails: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.configMap">configMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.logSources">logSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.monitoringSources">monitoringSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configMap`<sup>Required</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.configMap"></a>

```typescript
public readonly configMap: string;
```

- *Type:* string

---

##### `cursor`<sup>Required</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.cursor"></a>

```typescript
public readonly cursor: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `logSources`<sup>Required</sup> <a name="logSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.logSources"></a>

```typescript
public readonly logSources: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList</a>

---

##### `monitoringSources`<sup>Required</sup> <a name="monitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.monitoringSources"></a>

```typescript
public readonly monitoringSources: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList</a>

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.dimensionValue">dimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionValue`<sup>Required</sup> <a name="dimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.dimensionValue"></a>

```typescript
public readonly dimensionValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverSizeInMbs">batchRolloverSizeInMbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverTimeInMs">batchRolloverTimeInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInNum">batchSizeInNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchTimeInSec">batchTimeInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.enableFormattedMessaging">enableFormattedMessaging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logSourceIdentifier">logSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.objectNamePrefix">objectNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchRolloverSizeInMbs`<sup>Required</sup> <a name="batchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```typescript
public readonly batchRolloverSizeInMbs: number;
```

- *Type:* number

---

##### `batchRolloverTimeInMs`<sup>Required</sup> <a name="batchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverTimeInMs"></a>

```typescript
public readonly batchRolloverTimeInMs: number;
```

- *Type:* number

---

##### `batchSizeInKbs`<sup>Required</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInKbs"></a>

```typescript
public readonly batchSizeInKbs: number;
```

- *Type:* number

---

##### `batchSizeInNum`<sup>Required</sup> <a name="batchSizeInNum" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInNum"></a>

```typescript
public readonly batchSizeInNum: number;
```

- *Type:* number

---

##### `batchTimeInSec`<sup>Required</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchTimeInSec"></a>

```typescript
public readonly batchTimeInSec: number;
```

- *Type:* number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList</a>

---

##### `enableFormattedMessaging`<sup>Required</sup> <a name="enableFormattedMessaging" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.enableFormattedMessaging"></a>

```typescript
public readonly enableFormattedMessaging: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logSourceIdentifier`<sup>Required</sup> <a name="logSourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logSourceIdentifier"></a>

```typescript
public readonly logSourceIdentifier: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `objectNamePrefix`<sup>Required</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.objectNamePrefix"></a>

```typescript
public readonly objectNamePrefix: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchTimeInSec">batchTimeInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchSizeInKbs`<sup>Required</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchSizeInKbs"></a>

```typescript
public readonly batchSizeInKbs: number;
```

- *Type:* number

---

##### `batchTimeInSec`<sup>Required</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchTimeInSec"></a>

```typescript
public readonly batchTimeInSec: number;
```

- *Type:* number

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection">DataOciSchServiceConnectorsServiceConnectorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciSchServiceConnectorsServiceConnectorCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorsServiceConnectorCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection">DataOciSchServiceConnectorsServiceConnectorCollection</a>

---



