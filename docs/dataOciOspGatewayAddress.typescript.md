# `dataOciOspGatewayAddress` Submodule <a name="`dataOciOspGatewayAddress` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayAddress <a name="DataOciOspGatewayAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address oci_osp_gateway_address}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer"></a>

```typescript
import { dataOciOspGatewayAddress } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewayAddress.DataOciOspGatewayAddress(scope: Construct, id: string, config: DataOciOspGatewayAddressConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig">DataOciOspGatewayAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig">DataOciOspGatewayAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isConstruct"></a>

```typescript
import { dataOciOspGatewayAddress } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayAddress.DataOciOspGatewayAddress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformElement"></a>

```typescript
import { dataOciOspGatewayAddress } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformDataSource"></a>

```typescript
import { dataOciOspGatewayAddress } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport"></a>

```typescript
import { dataOciOspGatewayAddress } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOspGatewayAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOspGatewayAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOspGatewayAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressKey">addressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.contributorClass">contributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.departmentName">departmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.internalNumber">internalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line1">line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line2">line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line3">line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line4">line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.municipalInscription">municipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.phoneCountryCode">phoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.stateInscription">stateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.streetName">streetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.streetNumber">streetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressIdInput">addressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressId">addressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressKey"></a>

```typescript
public readonly addressKey: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.contributorClass"></a>

```typescript
public readonly contributorClass: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.departmentName"></a>

```typescript
public readonly departmentName: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.internalNumber"></a>

```typescript
public readonly internalNumber: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line1"></a>

```typescript
public readonly line1: string;
```

- *Type:* string

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line2"></a>

```typescript
public readonly line2: string;
```

- *Type:* string

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line3"></a>

```typescript
public readonly line3: string;
```

- *Type:* string

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.line4"></a>

```typescript
public readonly line4: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.municipalInscription"></a>

```typescript
public readonly municipalInscription: string;
```

- *Type:* string

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.phoneCountryCode"></a>

```typescript
public readonly phoneCountryCode: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.stateInscription"></a>

```typescript
public readonly stateInscription: string;
```

- *Type:* string

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

---

##### `addressIdInput`<sup>Optional</sup> <a name="addressIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressIdInput"></a>

```typescript
public readonly addressIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.ospHomeRegionInput"></a>

```typescript
public readonly ospHomeRegionInput: string;
```

- *Type:* string

---

##### `addressId`<sup>Required</sup> <a name="addressId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.addressId"></a>

```typescript
public readonly addressId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddress.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayAddressConfig <a name="DataOciOspGatewayAddressConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.Initializer"></a>

```typescript
import { dataOciOspGatewayAddress } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewayAddressConfig: dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.addressId">addressId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#address_id DataOciOspGatewayAddress#address_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#compartment_id DataOciOspGatewayAddress#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#osp_home_region DataOciOspGatewayAddress#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#id DataOciOspGatewayAddress#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressId`<sup>Required</sup> <a name="addressId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.addressId"></a>

```typescript
public readonly addressId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#address_id DataOciOspGatewayAddress#address_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#compartment_id DataOciOspGatewayAddress#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#osp_home_region DataOciOspGatewayAddress#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddress.DataOciOspGatewayAddressConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address#id DataOciOspGatewayAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



