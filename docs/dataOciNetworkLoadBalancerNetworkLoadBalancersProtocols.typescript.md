# `dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols` Submodule <a name="`dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols oci_network_load_balancer_network_load_balancers_protocols}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols(scope: Construct, id: string, config?: DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isConstruct"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformElement"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformDataSource"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.networkLoadBalancersProtocolCollection">networkLoadBalancersProtocolCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.filter"></a>

```typescript
public readonly filter: DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList</a>

---

##### `networkLoadBalancersProtocolCollection`<sup>Required</sup> <a name="networkLoadBalancersProtocolCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.networkLoadBalancersProtocolCollection"></a>

```typescript
public readonly networkLoadBalancersProtocolCollection: DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig: dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#id DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#filter DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#id DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter: dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#name DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#values DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#regex DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#name DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#values DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_protocols#regex DataOciNetworkLoadBalancerNetworkLoadBalancersProtocols#regex}.

---

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection: dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.get"></a>

```typescript
public get(index: number): DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter</a>[]

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter</a>

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.get"></a>

```typescript
public get(index: number): DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersProtocols.DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection">DataOciNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection</a>

---



