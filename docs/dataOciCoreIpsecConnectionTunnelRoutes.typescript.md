# `dataOciCoreIpsecConnectionTunnelRoutes` Submodule <a name="`dataOciCoreIpsecConnectionTunnelRoutes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnelRoutes <a name="DataOciCoreIpsecConnectionTunnelRoutes" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes oci_core_ipsec_connection_tunnel_routes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes(scope: Construct, id: string, config: DataOciCoreIpsecConnectionTunnelRoutesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig">DataOciCoreIpsecConnectionTunnelRoutesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig">DataOciCoreIpsecConnectionTunnelRoutesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetAdvertiser">resetAdvertiser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreIpsecConnectionTunnelRoutesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>[]

---

##### `resetAdvertiser` <a name="resetAdvertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetAdvertiser"></a>

```typescript
public resetAdvertiser(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnelRoutes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnelRoutes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnelRoutes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpsecConnectionTunnelRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnelRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList">DataOciCoreIpsecConnectionTunnelRoutesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelRoutes">tunnelRoutes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiserInput">advertiserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecIdInput">ipsecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiser">advertiser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecId">ipsecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filter"></a>

```typescript
public readonly filter: DataOciCoreIpsecConnectionTunnelRoutesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList">DataOciCoreIpsecConnectionTunnelRoutesFilterList</a>

---

##### `tunnelRoutes`<sup>Required</sup> <a name="tunnelRoutes" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelRoutes"></a>

```typescript
public readonly tunnelRoutes: DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList</a>

---

##### `advertiserInput`<sup>Optional</sup> <a name="advertiserInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiserInput"></a>

```typescript
public readonly advertiserInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreIpsecConnectionTunnelRoutesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipsecIdInput`<sup>Optional</sup> <a name="ipsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecIdInput"></a>

```typescript
public readonly ipsecIdInput: string;
```

- *Type:* string

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `advertiser`<sup>Required</sup> <a name="advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiser"></a>

```typescript
public readonly advertiser: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecId"></a>

```typescript
public readonly ipsecId: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelRoutesConfig <a name="DataOciCoreIpsecConnectionTunnelRoutesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelRoutesConfig: dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.ipsecId">ipsecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#ipsec_id DataOciCoreIpsecConnectionTunnelRoutes#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.tunnelId">tunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#tunnel_id DataOciCoreIpsecConnectionTunnelRoutes#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.advertiser">advertiser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#advertiser DataOciCoreIpsecConnectionTunnelRoutes#advertiser}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#id DataOciCoreIpsecConnectionTunnelRoutes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.ipsecId"></a>

```typescript
public readonly ipsecId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#ipsec_id DataOciCoreIpsecConnectionTunnelRoutes#ipsec_id}.

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#tunnel_id DataOciCoreIpsecConnectionTunnelRoutes#tunnel_id}.

---

##### `advertiser`<sup>Optional</sup> <a name="advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.advertiser"></a>

```typescript
public readonly advertiser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#advertiser DataOciCoreIpsecConnectionTunnelRoutes#advertiser}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreIpsecConnectionTunnelRoutesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#filter DataOciCoreIpsecConnectionTunnelRoutes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#id DataOciCoreIpsecConnectionTunnelRoutes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecConnectionTunnelRoutesFilter <a name="DataOciCoreIpsecConnectionTunnelRoutesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelRoutesFilter: dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#name DataOciCoreIpsecConnectionTunnelRoutes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#values DataOciCoreIpsecConnectionTunnelRoutes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#regex DataOciCoreIpsecConnectionTunnelRoutes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#name DataOciCoreIpsecConnectionTunnelRoutes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#values DataOciCoreIpsecConnectionTunnelRoutes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#regex DataOciCoreIpsecConnectionTunnelRoutes#regex}.

---

### DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes <a name="DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes: dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelRoutesFilterList <a name="DataOciCoreIpsecConnectionTunnelRoutesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreIpsecConnectionTunnelRoutesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>[]

---


### DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference <a name="DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreIpsecConnectionTunnelRoutesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>

---


### DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList <a name="DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference <a name="DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnelRoutes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.advertiser">advertiser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.age">age</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.asPath">asPath</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.isBestPath">isBestPath</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advertiser`<sup>Required</sup> <a name="advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.advertiser"></a>

```typescript
public readonly advertiser: string;
```

- *Type:* string

---

##### `age`<sup>Required</sup> <a name="age" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.age"></a>

```typescript
public readonly age: string;
```

- *Type:* string

---

##### `asPath`<sup>Required</sup> <a name="asPath" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.asPath"></a>

```typescript
public readonly asPath: number[];
```

- *Type:* number[]

---

##### `isBestPath`<sup>Required</sup> <a name="isBestPath" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.isBestPath"></a>

```typescript
public readonly isBestPath: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes</a>

---



