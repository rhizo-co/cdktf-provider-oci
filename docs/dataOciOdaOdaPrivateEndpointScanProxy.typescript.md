# `dataOciOdaOdaPrivateEndpointScanProxy` Submodule <a name="`dataOciOdaOdaPrivateEndpointScanProxy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOdaOdaPrivateEndpointScanProxy <a name="DataOciOdaOdaPrivateEndpointScanProxy" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy oci_oda_oda_private_endpoint_scan_proxy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointScanProxy } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy(scope: Construct, id: string, config: DataOciOdaOdaPrivateEndpointScanProxyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig">DataOciOdaOdaPrivateEndpointScanProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig">DataOciOdaOdaPrivateEndpointScanProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isConstruct"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointScanProxy } from 'rhizo-co-terraform-provider-oci'

dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformElement"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointScanProxy } from 'rhizo-co-terraform-provider-oci'

dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformDataSource"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointScanProxy } from 'rhizo-co-terraform-provider-oci'

dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointScanProxy } from 'rhizo-co-terraform-provider-oci'

dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOdaOdaPrivateEndpointScanProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOdaOdaPrivateEndpointScanProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOdaOdaPrivateEndpointScanProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.scanListenerInfos">scanListenerInfos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList">DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.scanListenerType">scanListenerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput">odaPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointScanProxyIdInput">odaPrivateEndpointScanProxyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId">odaPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointScanProxyId">odaPrivateEndpointScanProxyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `scanListenerInfos`<sup>Required</sup> <a name="scanListenerInfos" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.scanListenerInfos"></a>

```typescript
public readonly scanListenerInfos: DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList">DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList</a>

---

##### `scanListenerType`<sup>Required</sup> <a name="scanListenerType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.scanListenerType"></a>

```typescript
public readonly scanListenerType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `odaPrivateEndpointIdInput`<sup>Optional</sup> <a name="odaPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput"></a>

```typescript
public readonly odaPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `odaPrivateEndpointScanProxyIdInput`<sup>Optional</sup> <a name="odaPrivateEndpointScanProxyIdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointScanProxyIdInput"></a>

```typescript
public readonly odaPrivateEndpointScanProxyIdInput: string;
```

- *Type:* string

---

##### `odaPrivateEndpointId`<sup>Required</sup> <a name="odaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId"></a>

```typescript
public readonly odaPrivateEndpointId: string;
```

- *Type:* string

---

##### `odaPrivateEndpointScanProxyId`<sup>Required</sup> <a name="odaPrivateEndpointScanProxyId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointScanProxyId"></a>

```typescript
public readonly odaPrivateEndpointScanProxyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOdaOdaPrivateEndpointScanProxyConfig <a name="DataOciOdaOdaPrivateEndpointScanProxyConfig" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointScanProxy } from 'rhizo-co-terraform-provider-oci'

const dataOciOdaOdaPrivateEndpointScanProxyConfig: dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId">odaPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointScanProxyId">odaPrivateEndpointScanProxyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_scan_proxy_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_scan_proxy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `odaPrivateEndpointId`<sup>Required</sup> <a name="odaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId"></a>

```typescript
public readonly odaPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}.

---

##### `odaPrivateEndpointScanProxyId`<sup>Required</sup> <a name="odaPrivateEndpointScanProxyId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointScanProxyId"></a>

```typescript
public readonly odaPrivateEndpointScanProxyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_scan_proxy_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_scan_proxy_id}.

---

### DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos <a name="DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointScanProxy } from 'rhizo-co-terraform-provider-oci'

const dataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos: dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList <a name="DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointScanProxy } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.get"></a>

```typescript
public get(index: number): DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference <a name="DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointScanProxy } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn">scanListenerFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp">scanListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort">scanListenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos">DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scanListenerFqdn`<sup>Required</sup> <a name="scanListenerFqdn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn"></a>

```typescript
public readonly scanListenerFqdn: string;
```

- *Type:* string

---

##### `scanListenerIp`<sup>Required</sup> <a name="scanListenerIp" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp"></a>

```typescript
public readonly scanListenerIp: string;
```

- *Type:* string

---

##### `scanListenerPort`<sup>Required</sup> <a name="scanListenerPort" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort"></a>

```typescript
public readonly scanListenerPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxy.DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos">DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos</a>

---



