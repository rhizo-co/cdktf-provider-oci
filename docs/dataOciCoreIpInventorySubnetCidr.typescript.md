# `dataOciCoreIpInventorySubnetCidr` Submodule <a name="`dataOciCoreIpInventorySubnetCidr` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpInventorySubnetCidr <a name="DataOciCoreIpInventorySubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr oci_core_ip_inventory_subnet_cidr}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnetCidr } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr(scope: Construct, id: string, config: DataOciCoreIpInventorySubnetCidrConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig">DataOciCoreIpInventorySubnetCidrConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig">DataOciCoreIpInventorySubnetCidrConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpInventorySubnetCidr resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isConstruct"></a>

```typescript
import { dataOciCoreIpInventorySubnetCidr } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformElement"></a>

```typescript
import { dataOciCoreIpInventorySubnetCidr } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformDataSource"></a>

```typescript
import { dataOciCoreIpInventorySubnetCidr } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport"></a>

```typescript
import { dataOciCoreIpInventorySubnetCidr } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreIpInventorySubnetCidr resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpInventorySubnetCidr to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpInventorySubnetCidr that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpInventorySubnetCidr to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.ipInventoryCidrUtilizationSummary">ipInventoryCidrUtilizationSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList">DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.ipInventorySubnetCidrCount">ipInventorySubnetCidrCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `ipInventoryCidrUtilizationSummary`<sup>Required</sup> <a name="ipInventoryCidrUtilizationSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.ipInventoryCidrUtilizationSummary"></a>

```typescript
public readonly ipInventoryCidrUtilizationSummary: DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList">DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList</a>

---

##### `ipInventorySubnetCidrCount`<sup>Required</sup> <a name="ipInventorySubnetCidrCount" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.ipInventorySubnetCidrCount"></a>

```typescript
public readonly ipInventorySubnetCidrCount: number;
```

- *Type:* number

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidr.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpInventorySubnetCidrConfig <a name="DataOciCoreIpInventorySubnetCidrConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnetCidr } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpInventorySubnetCidrConfig: dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#subnet_id DataOciCoreIpInventorySubnetCidr#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#id DataOciCoreIpInventorySubnetCidr#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#subnet_id DataOciCoreIpInventorySubnetCidr#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet_cidr#id DataOciCoreIpInventorySubnetCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary <a name="DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnetCidr } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary: dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList <a name="DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnetCidr } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.get"></a>

```typescript
public get(index: number): DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference <a name="DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpInventorySubnetCidr } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.addressType">addressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.utilization">utilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary">DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.addressType"></a>

```typescript
public readonly addressType: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `utilization`<sup>Required</sup> <a name="utilization" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.utilization"></a>

```typescript
public readonly utilization: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnetCidr.DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary">DataOciCoreIpInventorySubnetCidrIpInventoryCidrUtilizationSummary</a>

---



