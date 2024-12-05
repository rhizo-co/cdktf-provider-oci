# `dataOciCoreIpsecConnectionTunnel` Submodule <a name="`dataOciCoreIpsecConnectionTunnel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnel <a name="DataOciCoreIpsecConnectionTunnel" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel oci_core_ipsec_connection_tunnel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel(scope: Construct, id: string, config: DataOciCoreIpsecConnectionTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig">DataOciCoreIpsecConnectionTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig">DataOciCoreIpsecConnectionTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpsecConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits">associatedVirtualCircuits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo">bgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp">cpeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig">dpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode">dpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec">dpdTimeoutInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig">encryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion">ikeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled">natTranslationEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate">oracleCanInitiate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails">phaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails">phaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing">routing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated">timeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp">vpnIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput">ipsecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId">ipsecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `associatedVirtualCircuits`<sup>Required</sup> <a name="associatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits"></a>

```typescript
public readonly associatedVirtualCircuits: string[];
```

- *Type:* string[]

---

##### `bgpSessionInfo`<sup>Required</sup> <a name="bgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo"></a>

```typescript
public readonly bgpSessionInfo: DataOciCoreIpsecConnectionTunnelBgpSessionInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpeIp`<sup>Required</sup> <a name="cpeIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp"></a>

```typescript
public readonly cpeIp: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dpdConfig`<sup>Required</sup> <a name="dpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig"></a>

```typescript
public readonly dpdConfig: DataOciCoreIpsecConnectionTunnelDpdConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a>

---

##### `dpdMode`<sup>Required</sup> <a name="dpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode"></a>

```typescript
public readonly dpdMode: string;
```

- *Type:* string

---

##### `dpdTimeoutInSec`<sup>Required</sup> <a name="dpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec"></a>

```typescript
public readonly dpdTimeoutInSec: number;
```

- *Type:* number

---

##### `encryptionDomainConfig`<sup>Required</sup> <a name="encryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig"></a>

```typescript
public readonly encryptionDomainConfig: DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: string;
```

- *Type:* string

---

##### `natTranslationEnabled`<sup>Required</sup> <a name="natTranslationEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled"></a>

```typescript
public readonly natTranslationEnabled: string;
```

- *Type:* string

---

##### `oracleCanInitiate`<sup>Required</sup> <a name="oracleCanInitiate" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate"></a>

```typescript
public readonly oracleCanInitiate: string;
```

- *Type:* string

---

##### `phaseOneDetails`<sup>Required</sup> <a name="phaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails"></a>

```typescript
public readonly phaseOneDetails: DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a>

---

##### `phaseTwoDetails`<sup>Required</sup> <a name="phaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails"></a>

```typescript
public readonly phaseTwoDetails: DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing"></a>

```typescript
public readonly routing: string;
```

- *Type:* string

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeStatusUpdated`<sup>Required</sup> <a name="timeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated"></a>

```typescript
public readonly timeStatusUpdated: string;
```

- *Type:* string

---

##### `vpnIp`<sup>Required</sup> <a name="vpnIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp"></a>

```typescript
public readonly vpnIp: string;
```

- *Type:* string

---

##### `ipsecIdInput`<sup>Optional</sup> <a name="ipsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput"></a>

```typescript
public readonly ipsecIdInput: string;
```

- *Type:* string

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId"></a>

```typescript
public readonly ipsecId: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfo <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelBgpSessionInfo: dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo = { ... }
```


### DataOciCoreIpsecConnectionTunnelConfig <a name="DataOciCoreIpsecConnectionTunnelConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelConfig: dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId">ipsecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId">tunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId"></a>

```typescript
public readonly ipsecId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}.

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}.

---

### DataOciCoreIpsecConnectionTunnelDpdConfig <a name="DataOciCoreIpsecConnectionTunnelDpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelDpdConfig: dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig = { ... }
```


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelEncryptionDomainConfig: dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig = { ... }
```


### DataOciCoreIpsecConnectionTunnelPhaseOneDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelPhaseOneDetails: dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails = { ... }
```


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelPhaseTwoDetails: dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfoList <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State">bgpIpv6State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState">bgpState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn">customerBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp">customerInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6">customerInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn">oracleBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp">oracleInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">oracleInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpIpv6State`<sup>Required</sup> <a name="bgpIpv6State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```typescript
public readonly bgpIpv6State: string;
```

- *Type:* string

---

##### `bgpState`<sup>Required</sup> <a name="bgpState" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState"></a>

```typescript
public readonly bgpState: string;
```

- *Type:* string

---

##### `customerBgpAsn`<sup>Required</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```typescript
public readonly customerBgpAsn: string;
```

- *Type:* string

---

##### `customerInterfaceIp`<sup>Required</sup> <a name="customerInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```typescript
public readonly customerInterfaceIp: string;
```

- *Type:* string

---

##### `customerInterfaceIpv6`<sup>Required</sup> <a name="customerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```typescript
public readonly customerInterfaceIpv6: string;
```

- *Type:* string

---

##### `oracleBgpAsn`<sup>Required</sup> <a name="oracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```typescript
public readonly oracleBgpAsn: string;
```

- *Type:* string

---

##### `oracleInterfaceIp`<sup>Required</sup> <a name="oracleInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```typescript
public readonly oracleInterfaceIp: string;
```

- *Type:* string

---

##### `oracleInterfaceIpv6`<sup>Required</sup> <a name="oracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```typescript
public readonly oracleInterfaceIpv6: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelBgpSessionInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a>

---


### DataOciCoreIpsecConnectionTunnelDpdConfigList <a name="DataOciCoreIpsecConnectionTunnelDpdConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode">dpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec">dpdTimeoutInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dpdMode`<sup>Required</sup> <a name="dpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode"></a>

```typescript
public readonly dpdMode: string;
```

- *Type:* string

---

##### `dpdTimeoutInSec`<sup>Required</sup> <a name="dpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```typescript
public readonly dpdTimeoutInSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelDpdConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a>

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">cpeTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">oracleTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpeTrafficSelector`<sup>Required</sup> <a name="cpeTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```typescript
public readonly cpeTrafficSelector: string[];
```

- *Type:* string[]

---

##### `oracleTrafficSelector`<sup>Required</sup> <a name="oracleTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```typescript
public readonly oracleTrafficSelector: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup">customDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">isCustomPhaseOneConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished">isIkeEstablished</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup">negotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime">remainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt">remainingLifetimeInt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">remainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customAuthenticationAlgorithm`<sup>Required</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```typescript
public readonly customAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `customDhGroup`<sup>Required</sup> <a name="customDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```typescript
public readonly customDhGroup: string;
```

- *Type:* string

---

##### `customEncryptionAlgorithm`<sup>Required</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```typescript
public readonly customEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `isCustomPhaseOneConfig`<sup>Required</sup> <a name="isCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```typescript
public readonly isCustomPhaseOneConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIkeEstablished`<sup>Required</sup> <a name="isIkeEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```typescript
public readonly isIkeEstablished: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `negotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="negotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```typescript
public readonly negotiatedAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `negotiatedDhGroup`<sup>Required</sup> <a name="negotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```typescript
public readonly negotiatedDhGroup: string;
```

- *Type:* string

---

##### `negotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="negotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```typescript
public readonly negotiatedEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `remainingLifetime`<sup>Required</sup> <a name="remainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```typescript
public readonly remainingLifetime: string;
```

- *Type:* string

---

##### `remainingLifetimeInt`<sup>Required</sup> <a name="remainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```typescript
public readonly remainingLifetimeInt: number;
```

- *Type:* number

---

##### `remainingLifetimeLastRetrieved`<sup>Required</sup> <a name="remainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```typescript
public readonly remainingLifetimeLastRetrieved: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelPhaseOneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnel } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup">dhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">isCustomPhaseTwoConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished">isEspEstablished</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled">isPfsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">negotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime">remainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">remainingLifetimeInt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">remainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customAuthenticationAlgorithm`<sup>Required</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```typescript
public readonly customAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `customEncryptionAlgorithm`<sup>Required</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```typescript
public readonly customEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```typescript
public readonly dhGroup: string;
```

- *Type:* string

---

##### `isCustomPhaseTwoConfig`<sup>Required</sup> <a name="isCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```typescript
public readonly isCustomPhaseTwoConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEspEstablished`<sup>Required</sup> <a name="isEspEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```typescript
public readonly isEspEstablished: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPfsEnabled`<sup>Required</sup> <a name="isPfsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```typescript
public readonly isPfsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `negotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="negotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```typescript
public readonly negotiatedAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `negotiatedDhGroup`<sup>Required</sup> <a name="negotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```typescript
public readonly negotiatedDhGroup: string;
```

- *Type:* string

---

##### `negotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="negotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```typescript
public readonly negotiatedEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `remainingLifetime`<sup>Required</sup> <a name="remainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```typescript
public readonly remainingLifetime: string;
```

- *Type:* string

---

##### `remainingLifetimeInt`<sup>Required</sup> <a name="remainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```typescript
public readonly remainingLifetimeInt: number;
```

- *Type:* number

---

##### `remainingLifetimeLastRetrieved`<sup>Required</sup> <a name="remainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```typescript
public readonly remainingLifetimeLastRetrieved: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelPhaseTwoDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a>

---



