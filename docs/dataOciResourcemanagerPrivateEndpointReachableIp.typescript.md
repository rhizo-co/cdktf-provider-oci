# `dataOciResourcemanagerPrivateEndpointReachableIp` Submodule <a name="`dataOciResourcemanagerPrivateEndpointReachableIp` Submodule" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciResourcemanagerPrivateEndpointReachableIp <a name="DataOciResourcemanagerPrivateEndpointReachableIp" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip oci_resourcemanager_private_endpoint_reachable_ip}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpointReachableIp } from 'rhizo-co-terraform-provider-oci'

new dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp(scope: Construct, id: string, config: DataOciResourcemanagerPrivateEndpointReachableIpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig">DataOciResourcemanagerPrivateEndpointReachableIpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig">DataOciResourcemanagerPrivateEndpointReachableIpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciResourcemanagerPrivateEndpointReachableIp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isConstruct"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpointReachableIp } from 'rhizo-co-terraform-provider-oci'

dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformElement"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpointReachableIp } from 'rhizo-co-terraform-provider-oci'

dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformDataSource"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpointReachableIp } from 'rhizo-co-terraform-provider-oci'

dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpointReachableIp } from 'rhizo-co-terraform-provider-oci'

dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciResourcemanagerPrivateEndpointReachableIp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciResourcemanagerPrivateEndpointReachableIp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciResourcemanagerPrivateEndpointReachableIp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciResourcemanagerPrivateEndpointReachableIp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateEndpointIdInput">privateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateEndpointIdInput`<sup>Optional</sup> <a name="privateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateEndpointIdInput"></a>

```typescript
public readonly privateEndpointIdInput: string;
```

- *Type:* string

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciResourcemanagerPrivateEndpointReachableIpConfig <a name="DataOciResourcemanagerPrivateEndpointReachableIpConfig" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.Initializer"></a>

```typescript
import { dataOciResourcemanagerPrivateEndpointReachableIp } from 'rhizo-co-terraform-provider-oci'

const dataOciResourcemanagerPrivateEndpointReachableIpConfig: dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_endpoint_id DataOciResourcemanagerPrivateEndpointReachableIp#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_ip DataOciResourcemanagerPrivateEndpointReachableIp#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#id DataOciResourcemanagerPrivateEndpointReachableIp#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_endpoint_id DataOciResourcemanagerPrivateEndpointReachableIp#private_endpoint_id}.

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_ip DataOciResourcemanagerPrivateEndpointReachableIp#private_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourcemanagerPrivateEndpointReachableIp.DataOciResourcemanagerPrivateEndpointReachableIpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#id DataOciResourcemanagerPrivateEndpointReachableIp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



