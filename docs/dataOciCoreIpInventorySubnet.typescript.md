# `dataOciCoreIpInventorySubnet` Submodule <a name="`dataOciCoreIpInventorySubnet` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpInventorySubnet <a name="DataOciCoreIpInventorySubnet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet oci_core_ip_inventory_subnet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnet } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet(scope: Construct, id: string, config: DataOciCoreIpInventorySubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig">DataOciCoreIpInventorySubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig">DataOciCoreIpInventorySubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpInventorySubnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isConstruct"></a>

```typescript
import { dataOciCoreIpInventorySubnet } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformElement"></a>

```typescript
import { dataOciCoreIpInventorySubnet } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformDataSource"></a>

```typescript
import { dataOciCoreIpInventorySubnet } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport"></a>

```typescript
import { dataOciCoreIpInventorySubnet } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreIpInventorySubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpInventorySubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpInventorySubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpInventorySubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.ipInventorySubnetCount">ipInventorySubnetCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.ipInventorySubnetResourceSummary">ipInventorySubnetResourceSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList">DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `ipInventorySubnetCount`<sup>Required</sup> <a name="ipInventorySubnetCount" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.ipInventorySubnetCount"></a>

```typescript
public readonly ipInventorySubnetCount: number;
```

- *Type:* number

---

##### `ipInventorySubnetResourceSummary`<sup>Required</sup> <a name="ipInventorySubnetResourceSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.ipInventorySubnetResourceSummary"></a>

```typescript
public readonly ipInventorySubnetResourceSummary: DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList">DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList</a>

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpInventorySubnetConfig <a name="DataOciCoreIpInventorySubnetConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnet } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpInventorySubnetConfig: dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#subnet_id DataOciCoreIpInventorySubnet#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#id DataOciCoreIpInventorySubnet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#subnet_id DataOciCoreIpInventorySubnet#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#id DataOciCoreIpInventorySubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary <a name="DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnet } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary: dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList <a name="DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnet } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.get"></a>

```typescript
public get(index: number): DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference <a name="DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnet } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.addressType">addressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedResourceName">assignedResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedResourceType">assignedResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedTime">assignedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.associatedPublicIp">associatedPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.associatedPublicIpPool">associatedPublicIpPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.dnsHostName">dnsHostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipAddressLifetime">ipAddressLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipId">ipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.parentCidr">parentCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.publicIpLifetime">publicIpLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary">DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.addressType"></a>

```typescript
public readonly addressType: string;
```

- *Type:* string

---

##### `assignedResourceName`<sup>Required</sup> <a name="assignedResourceName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedResourceName"></a>

```typescript
public readonly assignedResourceName: string;
```

- *Type:* string

---

##### `assignedResourceType`<sup>Required</sup> <a name="assignedResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedResourceType"></a>

```typescript
public readonly assignedResourceType: string;
```

- *Type:* string

---

##### `assignedTime`<sup>Required</sup> <a name="assignedTime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedTime"></a>

```typescript
public readonly assignedTime: string;
```

- *Type:* string

---

##### `associatedPublicIp`<sup>Required</sup> <a name="associatedPublicIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.associatedPublicIp"></a>

```typescript
public readonly associatedPublicIp: string;
```

- *Type:* string

---

##### `associatedPublicIpPool`<sup>Required</sup> <a name="associatedPublicIpPool" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.associatedPublicIpPool"></a>

```typescript
public readonly associatedPublicIpPool: string;
```

- *Type:* string

---

##### `dnsHostName`<sup>Required</sup> <a name="dnsHostName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.dnsHostName"></a>

```typescript
public readonly dnsHostName: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipAddressLifetime`<sup>Required</sup> <a name="ipAddressLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipAddressLifetime"></a>

```typescript
public readonly ipAddressLifetime: string;
```

- *Type:* string

---

##### `ipId`<sup>Required</sup> <a name="ipId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipId"></a>

```typescript
public readonly ipId: string;
```

- *Type:* string

---

##### `parentCidr`<sup>Required</sup> <a name="parentCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.parentCidr"></a>

```typescript
public readonly parentCidr: string;
```

- *Type:* string

---

##### `publicIpLifetime`<sup>Required</sup> <a name="publicIpLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.publicIpLifetime"></a>

```typescript
public readonly publicIpLifetime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary">DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary</a>

---



