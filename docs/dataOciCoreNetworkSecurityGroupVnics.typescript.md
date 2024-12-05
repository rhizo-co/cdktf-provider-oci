# `dataOciCoreNetworkSecurityGroupVnics` Submodule <a name="`dataOciCoreNetworkSecurityGroupVnics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreNetworkSecurityGroupVnics <a name="DataOciCoreNetworkSecurityGroupVnics" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics oci_core_network_security_group_vnics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics(scope: Construct, id: string, config: DataOciCoreNetworkSecurityGroupVnicsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig">DataOciCoreNetworkSecurityGroupVnicsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig">DataOciCoreNetworkSecurityGroupVnicsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreNetworkSecurityGroupVnicsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupVnics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupVnics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreNetworkSecurityGroupVnics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreNetworkSecurityGroupVnics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreNetworkSecurityGroupVnics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList">DataOciCoreNetworkSecurityGroupVnicsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupVnics">networkSecurityGroupVnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupIdInput">networkSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filter"></a>

```typescript
public readonly filter: DataOciCoreNetworkSecurityGroupVnicsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList">DataOciCoreNetworkSecurityGroupVnicsFilterList</a>

---

##### `networkSecurityGroupVnics`<sup>Required</sup> <a name="networkSecurityGroupVnics" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupVnics"></a>

```typescript
public readonly networkSecurityGroupVnics: DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreNetworkSecurityGroupVnicsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkSecurityGroupIdInput`<sup>Optional</sup> <a name="networkSecurityGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupIdInput"></a>

```typescript
public readonly networkSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupId"></a>

```typescript
public readonly networkSecurityGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreNetworkSecurityGroupVnicsConfig <a name="DataOciCoreNetworkSecurityGroupVnicsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.Initializer"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreNetworkSecurityGroupVnicsConfig: dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.networkSecurityGroupId"></a>

```typescript
public readonly networkSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreNetworkSecurityGroupVnicsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#filter DataOciCoreNetworkSecurityGroupVnics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreNetworkSecurityGroupVnicsFilter <a name="DataOciCoreNetworkSecurityGroupVnicsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.Initializer"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreNetworkSecurityGroupVnicsFilter: dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#name DataOciCoreNetworkSecurityGroupVnics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#values DataOciCoreNetworkSecurityGroupVnics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#regex DataOciCoreNetworkSecurityGroupVnics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#name DataOciCoreNetworkSecurityGroupVnics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#values DataOciCoreNetworkSecurityGroupVnics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#regex DataOciCoreNetworkSecurityGroupVnics#regex}.

---

### DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics <a name="DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics.Initializer"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics: dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreNetworkSecurityGroupVnicsFilterList <a name="DataOciCoreNetworkSecurityGroupVnicsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreNetworkSecurityGroupVnicsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>[]

---


### DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference <a name="DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreNetworkSecurityGroupVnicsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>

---


### DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList <a name="DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.get"></a>

```typescript
public get(index: number): DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference <a name="DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreNetworkSecurityGroupVnics } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.timeAssociated">timeAssociated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `timeAssociated`<sup>Required</sup> <a name="timeAssociated" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.timeAssociated"></a>

```typescript
public readonly timeAssociated: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics</a>

---



