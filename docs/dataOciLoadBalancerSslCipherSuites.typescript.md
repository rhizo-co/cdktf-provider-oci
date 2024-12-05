# `dataOciLoadBalancerSslCipherSuites` Submodule <a name="`dataOciLoadBalancerSslCipherSuites` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerSslCipherSuites <a name="DataOciLoadBalancerSslCipherSuites" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites oci_load_balancer_ssl_cipher_suites}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.Initializer"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites(scope: Construct, id: string, config: DataOciLoadBalancerSslCipherSuitesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig">DataOciLoadBalancerSslCipherSuitesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig">DataOciLoadBalancerSslCipherSuitesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLoadBalancerSslCipherSuitesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter">DataOciLoadBalancerSslCipherSuitesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerSslCipherSuites resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isConstruct"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isTerraformElement"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isTerraformDataSource"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.generateConfigForImport"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLoadBalancerSslCipherSuites resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoadBalancerSslCipherSuites to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoadBalancerSslCipherSuites that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerSslCipherSuites to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList">DataOciLoadBalancerSslCipherSuitesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.sslCipherSuites">sslCipherSuites</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList">DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter">DataOciLoadBalancerSslCipherSuitesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.filter"></a>

```typescript
public readonly filter: DataOciLoadBalancerSslCipherSuitesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList">DataOciLoadBalancerSslCipherSuitesFilterList</a>

---

##### `sslCipherSuites`<sup>Required</sup> <a name="sslCipherSuites" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.sslCipherSuites"></a>

```typescript
public readonly sslCipherSuites: DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList">DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLoadBalancerSslCipherSuitesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter">DataOciLoadBalancerSslCipherSuitesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuites.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerSslCipherSuitesConfig <a name="DataOciLoadBalancerSslCipherSuitesConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.Initializer"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerSslCipherSuitesConfig: dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#load_balancer_id DataOciLoadBalancerSslCipherSuites#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter">DataOciLoadBalancerSslCipherSuitesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#id DataOciLoadBalancerSslCipherSuites#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#load_balancer_id DataOciLoadBalancerSslCipherSuites#load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLoadBalancerSslCipherSuitesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter">DataOciLoadBalancerSslCipherSuitesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#filter DataOciLoadBalancerSslCipherSuites#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#id DataOciLoadBalancerSslCipherSuites#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLoadBalancerSslCipherSuitesFilter <a name="DataOciLoadBalancerSslCipherSuitesFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter.Initializer"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerSslCipherSuitesFilter: dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#name DataOciLoadBalancerSslCipherSuites#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#values DataOciLoadBalancerSslCipherSuites#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#regex DataOciLoadBalancerSslCipherSuites#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#name DataOciLoadBalancerSslCipherSuites#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#values DataOciLoadBalancerSslCipherSuites#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_ssl_cipher_suites#regex DataOciLoadBalancerSslCipherSuites#regex}.

---

### DataOciLoadBalancerSslCipherSuitesSslCipherSuites <a name="DataOciLoadBalancerSslCipherSuitesSslCipherSuites" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuites"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuites.Initializer"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerSslCipherSuitesSslCipherSuites: dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuites = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerSslCipherSuitesFilterList <a name="DataOciLoadBalancerSslCipherSuitesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.Initializer"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerSslCipherSuitesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter">DataOciLoadBalancerSslCipherSuitesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoadBalancerSslCipherSuitesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter">DataOciLoadBalancerSslCipherSuitesFilter</a>[]

---


### DataOciLoadBalancerSslCipherSuitesFilterOutputReference <a name="DataOciLoadBalancerSslCipherSuitesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter">DataOciLoadBalancerSslCipherSuitesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoadBalancerSslCipherSuitesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesFilter">DataOciLoadBalancerSslCipherSuitesFilter</a>

---


### DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList <a name="DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.Initializer"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference <a name="DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerSslCipherSuites } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.ciphers">ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuites">DataOciLoadBalancerSslCipherSuitesSslCipherSuites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuitesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoadBalancerSslCipherSuitesSslCipherSuites;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerSslCipherSuites.DataOciLoadBalancerSslCipherSuitesSslCipherSuites">DataOciLoadBalancerSslCipherSuitesSslCipherSuites</a>

---



